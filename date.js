exports.getDate = function () {
    const options = {
        weekday: "long",
        year: "2-digit",
        month: "numeric",
        day: "numeric",
      };
    let date = new Date().toLocaleDateString("en-US", options);
    return date;
}

exports.getDay = function () {
    console.log("getDay");
}