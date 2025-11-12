import "./TimeBox.css";

export interface TimeBoxType {
    label: string;
    value: number;
}

const TimeBox = ({ label, value }: TimeBoxType) => (
    <div className="timebox">
        <p>{value}</p>
        <span>{label}</span>
    </div>
);

export default TimeBox;
