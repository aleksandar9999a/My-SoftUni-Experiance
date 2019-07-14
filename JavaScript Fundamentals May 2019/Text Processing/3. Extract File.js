function extractFile(fileLocation) {
    let file = fileLocation.substring((fileLocation.lastIndexOf(`\\`) + 1), fileLocation.length);

    console.log(`File name: ${file.substring(0, file.lastIndexOf(`.`))}`);
    console.log(`File extension: ${file.substring((file.lastIndexOf(`.`) + 1), file.length)}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')