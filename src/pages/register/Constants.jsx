// import cricket from "../../assets/register/cricket.jpg";
const cricket = "https://res.cloudinary.com/dujmw5q9s/image/upload/v1735453590/cricket_zneued.jpg";
// import badminton from "../../assets/register/badminton.jpg";
const badminton = "https://res.cloudinary.com/dujmw5q9s/image/upload/v1735453587/badminton_jdifon.jpg"
// import badminton2 from "../../assets/register/badminton2.jpeg";
const badminton2 = "https://res.cloudinary.com/dujmw5q9s/image/upload/v1735453588/badminton2_aogngi.jpg"

const BADMINTON_SINGLES_RULES = [
  "Participants must be current students of the college.",
  "Each participant can register for only one category: singles or doubles.",
  "The last date for registration is [Insert Date].",
  "Participants must bring their own rackets; shuttlecocks will be provided.",
  "Matches will follow the standard rules of singles badminton.",
  "The organizing committee reserves the right to modify rules as per event requirements.",
  "Players must adhere to the code of conduct and display sportsmanship at all times.",
  "Any form of misconduct will lead to disqualification.",
  "Participants are responsible for their health and well-being.",
  "The organizing committee will not be liable for any injuries sustained during the matches.",
];

const BADMINTON_DOUBLES_RULES = [
  "A team must consist of 2 players.",
  "Participants must be current students of the college.",
  "Each participant can register for only one category: singles or doubles.",
  "The last date for registration is [Insert Date].",
  "Participants must bring their own rackets; shuttlecocks will be provided.",
  "Matches will follow the standard rules of doubles badminton.",
  "The organizing committee reserves the right to modify rules as per event requirements.",
  "Players must adhere to the code of conduct and display sportsmanship at all times.",
  "Any form of misconduct will lead to disqualification.",
  "Participants are responsible for their health and well-being.",
  "The organizing committee will not be liable for any injuries sustained during the matches.",
];
const CRICKET_RULES = [
  "A team must consist of 11 players, including a captain and a vice-captain.",
  "Each team is allowed a maximum of 2 substitute players.",
  "Participants must be current students of the college.",
  "Each participant can register for only one cricket team.",
  "The last date for team registration is [Insert Date].",
  "Teams must wear proper cricket uniforms during the matches.",
  "Teams are required to bring their own equipment, including bats, balls, and gloves.",
  "Matches will follow the standard rules of one-day cricket.",
  "The organizing committee reserves the right to modify rules as per event requirements.",
  "Players must adhere to the code of conduct and display sportsmanship at all times.",
  "Any form of misconduct will lead to disqualification.",
  "Participants are responsible for their health and well-being.",
  "The organizing committee will not be liable for any injuries sustained during the matches.",
];

export const SPORTS = [
  {
    name: "cricket",
    display: "Cricket",
    players: 11,
    image: cricket,
    rules: CRICKET_RULES,
  },
  {
    name: "badminton_(singles)",
    display: "Badminton (Singles)",
    players: 1,
    image: badminton,
    rules: BADMINTON_SINGLES_RULES,
  },
  {
    name: "badminton_(doubles)",
    display: "Badminton (Doubles)",
    players: 2,
    image: badminton2,
    rules: BADMINTON_DOUBLES_RULES,
  },
];
