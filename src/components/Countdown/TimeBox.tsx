import "./TimeBox.css";

const TimeBox = ({ label, value }: any) => (
    <div className="timebox">
        <p>{value}</p>
        <span>{label}</span>
    </div>
);

export default TimeBox;
