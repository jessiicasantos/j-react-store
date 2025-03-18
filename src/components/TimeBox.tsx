const TimeBox = ({ label, value }: any) => (
    <div className="flex flex-col items-center justify-center mr-4">
        <p className="font-bold text-2xl flex items-center justify-center bg-white p-2 rounded-xl flex-[0_1_24%] size-[50px]">{value}</p>
        <span>{label}</span>
    </div>
);

export default TimeBox;
