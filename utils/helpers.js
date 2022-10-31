module.exports = {
  format_time: (date) => {
   
    return date.toLocaleTimeString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  },
};
