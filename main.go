package main

import (
	"flag"
	"fmt"
	"github.com/domhudson/dreda/visualise"
	"os"
)

func getArguments() (*string, *int) {

	// Parse arguments.
	address := flag.String("address", "127.0.0.1", "Address to bind to.")
	port := flag.Int("port", 8000, "Port to bind to.")
	flag.Parse()
	
	if flag.NArg() != 0 {
		flag.Usage()
		os.Exit(1)
	}

	return address, port
}

func myUsage() {
	fmt.Printf("Usage: %s [flags]\n", os.Args[0])
	fmt.Printf("\nOptional flags:\n")
	flag.PrintDefaults()
}

func main() {
	flag.Usage = myUsage
	address, port := getArguments()

	app := visualise.App{
		Addr: *address,
		Port: *port,	
	}
	app.Run()
}
