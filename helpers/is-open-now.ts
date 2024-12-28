export interface isOpenNowProps{
weekDay: string;
opening: string;
closing: string;
}

export const isOpenNow = (schedule: isOpenNowProps[]): boolean => {
  const now = new Date();
  const currentDay = now.toLocaleDateString("en-US", { weekday: "long" }); // Exemplo: "Monday"
  const currentTime = now.toTimeString().slice(0, 5); // Exemplo: "14:30"

  // Encontrar o horário do dia atual
  const todaySchedule = schedule.find((item) => item.weekDay === currentDay);

  // Se o dia atual não estiver no cronograma ou estiver "Closed"
  if (!todaySchedule || todaySchedule.opening === "Closed") {
    return false;
  }

  const [openingHour, openingMinute] = todaySchedule.opening.split(":").map(Number);
  const [closingHour, closingMinute] = todaySchedule.closing.split(":").map(Number);

  const openingTime = new Date(now);
  openingTime.setHours(openingHour, openingMinute, 0, 0);

  const closingTime = new Date(now);
  closingTime.setHours(closingHour, closingMinute, 0, 0);

  // Se o horário de fechamento for menor que o horário de abertura, significa que o fechamento ocorre no dia seguinte
  if (closingTime < openingTime) {
    closingTime.setDate(closingTime.getDate() + 1);
  }

  // Verificar se o horário atual está entre o horário de abertura e fechamento
  return now >= openingTime && now <= closingTime;
};