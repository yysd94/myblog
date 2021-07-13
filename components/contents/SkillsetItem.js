const SkillsetItem = (props) => {
    const {itemKey, title, skills, visibleKey} = props;
    return (
      <div>
          <div className="my-2 hover:bg-gray-100">
            <div className="p-1">{title}</div>
          </div>
          {itemKey === visibleKey && 
            <div className="border border-gray-300 shadow rounded-md p-4 mx-auto">
              <div className="">
                {skills.map((skill, index) => 
                    <div key={index} className="p-1">{skill}</div>
                )}
              </div>
            </div>  
          } 
      </div>
    )
}

export default SkillsetItem
