// Object Destructuring 
    const band = {
        bandName :"kcCrew",
        fanusSong : "Once in while",
        year: "1990"
    }
    // we want to make varible and save the value of bandName ="kcCrew";
    // var bandName = band.bandName;
    // var famusSOng = band.fanusSong;
    // console.log(bandName,famusSOng);//kcCrew Once in while

    let {bandName, fanusSong} = band; // name of the varible should same as the keys
    bandName="queen";
    console.log(fanusSong,bandName);

    let {bandName:var1, fanusSong:var2,...rest} = band;
    console.log(rest);//Object { year: "1990" }
    console.log(var1,var2);