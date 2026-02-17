const environmentInfo={
    platform: process.platform,
    nodeVersion: process.version,
    currentTime: new Date().toLocaleString()

};

console.log("I am running on: "+environmentInfo.platform);
console.log("My nodeJs version is: "+environmentInfo.nodeVersion);
console.log("Current time is: "+environmentInfo.currentTime);