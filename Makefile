all: 
	fileb0x b0x.json
	go build -o dreda-cli main.go

clean:
	rm -rf dreda-cli
	rm -rf static