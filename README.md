# Private Blockchain RESTful API

Simple **RESTFul** API to retrieve and create Blocks from a private Blockchain.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- Node JS ( Tested with v11.2.0)

### Installing

In order to install all the required libraries please use the commands bellow:

Install Node Modules

```
npm install
```

### How to use

Please use the commands bellow to start the RESTful API

Start the service

```
$ node app.js
Server Listening for port: 8000
```

The service will run on port 8000 by default

### End-Points

**GET** /api/block/{index}

**Parameters**

|  Parameter | Type   | Description 
|---|---|---|
| index  |  Path Parameter | Indicates the index of the block that will be retrieved if it exist.|

**Response Codes**


| Code | Description 
|---|---|
| 200 | The block was found and it is retrieved. |
| 404 | The resource it is not found or the block does not exist. |
| 500 | A server error. |

If the block is found it will be retrieved. e.g.


```
-- Retrieving the Genesis Block created by default:

$ curl -X GET localhost:8000/api/block/0 

{
    "hash":"2366b6c68d8a106c5852453b9ccdb4a1b4ad9f1a6947a19be75e67ec6e62a713",
    "height":0,
    "body":"First block in the chain",
    "time":"1543788082",
    "previousBlockHash":""
}
```

**POST** /api/block/

**Parameters**

|  Parameter | Type   | Description 
|---|---|---|
| body  |  Payload Parameter | Indicates the data that the new block will contain

**Response Codes**


| Code | Description
|---|---|
| 200  | The block was created and returned.
| 400 | A bas request has been made to create a new block.
| 500 | A server error

If the block is created successfully then it will be returned in the response.

```
-- Creating a new block

$ curl -X POST \
  http://localhost:8000/api/block \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"body": "Hello World"
}'


{
    "hash": "9f966354a0105c44a6214346ce1a54b724c43ea629c17b37e883dffdb10e3f41",
    "height": 37,
    "body": "Hello World",
    "time": "1543808600",
    "previousBlockHash": "c68743badca718b8b80bb00e0c5e2f782dc3714ada4bea2b7ffa223c84152553"
}
```
### Logs

Any time the user calls an end-point it is being log in the application console. 
Describing which end-point was called and the time it took.

### Storage of the blockchain
The blocklchain is being saved in a folder called **privatechain** which will be created when the blockchain is initialized.

## Versioning

| Version | Status
|---|---|
|0.0.2| Stable

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/axelgalicia/private-blockchain-service/tags). 

## Authors

* **Axel Galicia** - *Initial work* - [PrivateBlockchain](https://github.com/axelgalicia/blockchain-private-blockchain)
axelgalicia@gmail.com


## License

This project is licensed under the MIT License
