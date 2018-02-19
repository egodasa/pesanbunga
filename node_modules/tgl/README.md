# tgl

tgl merupakan modules perubahan format date versi EN(english) menjadi date ve rsi IDN(Indonesia)

- get detik,menit,jam,hari,bulan dan tahun
- mendapatkan 'time ago'

## Installation

```sh
$ npm install --save tgl
```

## list

|Function          | Input Type | Result|
|----------------- | ---------- | -----------------------|
|hari(date)        | date       | Kamis                   |
|bulan(date)       | date       | Januari                 |
|tahun(date)       | date       | 2017                    |
|jam(date)         | date       | 12                      |
|menit(date)       | date       | 45                      |
|formatfull1(date) | date       | Rabu, Mei 2017 11:11:09 |
|formatfull2(date) | date       | 2017-04-17T11:30:06     |
|formatfull3(date) | date       | 2017-04-17T11:31:58Z    |
|formatdate1(date) | date       | Rabu, Mei 2017          |
|formatdate2(date) | date       | 2017, Mei               |
|formatdate3(date) | date       | 17/04/2017              |
|formatdate4(date) | date       | 2017-04-17              |
|formattime1(date) | date       | 11:06:20                |
|formattime2(date) | date       | 11:06                   |
|kapan(date)       | string     | 55 menit lalu           |


## example

```sh
const tgl =require('tgl');
```
gunakan function yang ada di 'List'

```sh
tgl.hari(new Date)  //hasil : Kamis

atau

tgl.hari(new Date('2017-05-17T04:50:01.260Z'))

```

`NOTE!!` khusus untuk function kapan(), parameternya diisi harus berupa STRING. contoh :

```sh
tgl.kapan(new Date('2017-05-17T04:50:01.260Z'))  //hasil : 59 menit lalu
```
