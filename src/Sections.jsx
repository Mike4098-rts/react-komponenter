const SectionList = ({ data }) => {
  return (
    <div className="section__list">
      {data.map((section) => (
        <div className="header__data" key={section.id}>
          <h1>{section.title}</h1>
          <p>{section.body}</p>
          
        </div>
       
      ))}
    </div>
  );
};

export default SectionList;