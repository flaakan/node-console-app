const os = require("os");

const convertToGb  = (bytes) =>{
    return (bytes/ Math.pow(1024,3)).toFixed(2);
};

module.exports.displayInfo = () => {
   
    const output = `
    SYSTEM MEMORY: ${convertToGb(os.totalmem())} GB
    FREE MEMORY: ${convertToGb(os.freemem())} GB
    CPU CORES: ${os.cpus().length}
    ARCH: ${os.arch()}
    PLATFORM: ${os.platform()}
    RELEASE: ${os.release()}
    USER: ${os.userInfo().username}
    `;
    console.log(output);
};