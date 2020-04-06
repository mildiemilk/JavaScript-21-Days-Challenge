(() => {
  // เริ่มเขียนโค้ด
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  setElemInnerText = (id, text) => {
    const elem = document.getElementById(id)
    elem.innerText = text
  }

  coundDown = () => {
    const now = new Date().getTime()
    const newYear = new Date('December 31, 2020 23:59:59').getTime()
    const unixTimeLeft = newYear - now

    setElemInnerText('days', Math.floor(unixTimeLeft / DAY))
    setElemInnerText('hours', Math.floor(unixTimeLeft % DAY / HOUR))
    setElemInnerText('minutes', Math.floor(unixTimeLeft % HOUR / MINUTE))
    setElemInnerText('seconds', Math.floor(unixTimeLeft % MINUTE / SECOND))
  }
  run = () => {
    coundDown()
    setInterval(coundDown, SECOND)
  }
  run()
})();
