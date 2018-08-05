# DREDA

Beautifully visualize any 3D dataset in the browser.


## What

Explore high dimensionality data via reduction and exploration using Three.js. A stand-alone binary file is produced that hosts the server and serves up all necessary static files.
![screenshot from 2018-08-03 22-04-36](https://user-images.githubusercontent.com/10864294/43665793-41c0e208-9769-11e8-933e-2ef34b3ab20b.png)


## How
[Download the v0.1.0 Linux pre-compile binary](https://github.com/DomHudson/dreda/releases/download/v0.1.0/dreda-cli-linux-v0.1.0). Simply start a server by executing the binary. You can then upload your own dataset to plot, or choose one of the included exampes.

```
$ ./dreda-cli --help
```

```
Usage: ./dreda-cli [flags]

Optional flags:
  -address string
        Address to bind to. (default "127.0.0.1")
  -port int
        Port to bind to. (default 8000)
```

## Why

Sometimes you have too many fields, features, columns... dimensions, to your data. 

[Wikipedia](http://en.wikipedia.org/wiki/Dimensionality_reduction):
>In machine learning and statistics, dimensionality reduction or dimension reduction is the process of reducing the number of random variables under consideration, and can be divided into feature selection and feature extraction.

If you reduce your data down, say via [SVD](http://en.wikipedia.org/wiki/Singular_value_decomposition) or [t-SNE](http://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding), to three dimensions, you can visualize it with this tool. Currently Dreda supports 4 dimensions (x,y,z, and color). Color assignments are chosen randomly. 

I had been doing some visualizations in iPython and they left much to be desired. The data input here is just the ouput of a pandas data frame `to_json()` - a JSON object with an inner object for each column - index and value pairs in each inner object

E.g.
```
{
  "x":
  {
    "0":117.0501353217,
    "1":63.4789054268,
    "2":-92.4110611211
  },
  "y":
    {
      "0":-33.8277679817,
      "1":120.3959209587,
      "2":172.3790645372
    },
  "z":
    {
    "0":-17.441790351,
    "1":-34.4737315608,
    "2":-224.6172323059
    },
  "cid":
    {
      "0":4.0,
      "1":1.0,
      "2":4.0
    }
}
```

## Building

To build Dreda you will need [fileb0x](https://github.com/UnnoTed/fileb0x) installed. This tool is used to package the static files into a `.go` file to compile.

1. Clone the repository.
```
git clone ...
```

2. Make the application. This will run fileb0x and compile the binary.
```
make
```

3. The binary can now be run via
```
./dreda-cli
```

## Authors

- Xander Johnson
- Dom Hudson
