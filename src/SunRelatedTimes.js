export default function SunRelatedTimes(props) {
  let Hour = props.Time.getHours();
  if (Hour < 10) {
    Hour = `0${Hour}`;
  }
  let Minutes = props.Time.getMinutes();
  if (Minutes < 10) {
    Minutes = `0${Minutes}`;
  }
  return `${Hour}:${Minutes}`;
}
