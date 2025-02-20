const toggle = () => {
  const card = $("#card");

  card.toggleClass("active");

  if (card.hasClass("active")) {
    setTimeout(() => {
      card[0].scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }
};
