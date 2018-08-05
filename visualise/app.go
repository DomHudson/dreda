package visualise

import (
	"fmt"
	"github.com/domhudson/dreda/static"
	"log"
	"net/http"
	"time"
)

type App struct {
	Addr string
	Port int
}

// Run starts a server and runs the application.
func (app *App) Run() {

	fs := http.FileServer(static.HTTP)

	address := app.getBindAddress()

	log.Printf("Listening on %s...\n", address)

	server := &http.Server{
		Addr:         address,
		Handler:      logRequest(fs),
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
	}
	log.Fatal(server.ListenAndServe())
}

// getBindAddress returns a concatenation of the
// binding address with the port.
func (app *App) getBindAddress() string {
	return fmt.Sprintf("%s:%d", app.Addr, app.Port)
}

// logRequest is a handler that logs the requests
// to stdout in real time.
func logRequest(handler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("%s %s %s\n", r.RemoteAddr, r.Method, r.URL)
		handler.ServeHTTP(w, r)
	})
}
