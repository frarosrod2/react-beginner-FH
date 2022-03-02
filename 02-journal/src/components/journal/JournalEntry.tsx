export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://spaceplace.nasa.gov/sunburn/sp/sunburn1.sp.png)',
        }}></div>
      <div className="journal__entry-body">
        <p className="journall__entry-title">Un nuevo día</p>
        <p className="journal__entry-content">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
