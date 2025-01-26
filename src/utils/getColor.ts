const getColor = (statusId: string) => {
  switch (statusId) {
    case "Заявка принята":
      return "pink";
    case "Заявка на рассмотрении":
      return "blue";
    case "Заявка отклонена":
      return "red";
    case "Заявка одобрена":
      return "green";
    default:
      return "blue;";
  }
};

export default getColor;
