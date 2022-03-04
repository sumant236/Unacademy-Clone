import React from 'react'
import style from "./PlusSlider.module.css"

export const StructuredCourse = () => {
  return (
    <div>
        <img src='https://static.uacdn.net/web-cms/daily_live_classes_be8fa5af21.svg?q=75&w=1000&fm=webp' alt="structure"/>

        <h4 className={style.title}>Structured courses</h4>

        <p> All our courses are structured in line with your exam syllabus to help you best prepare for it</p>
    </div>
  )
}


export const LiveTests = () => {
    return (
      <div>
          <img src='https://static.uacdn.net/web-cms/mock_test_quizes_521a5f770e.svg?q=75&w=1000&fm=webp' alt="structure"/>
  
          <h4 className={style.title}>Live tests and quizzes</h4>
  
          <p> Take live Mock Tests curated in line with the exam pattern and stay on track with your preparation</p>
      </div>
    )
}

export const LiveClasses = () => {
    return (
      <div>
          <img src='https://static.uacdn.net/web-cms/chat_with_educator_6cb3c64761.svg?q=75&w=1000&fm=webp' alt="liveclasses"/>
  
          <h4 className={style.title}>Interactive Live Classes</h4>
  
          <p className={style.details}>Chat with the educator, engage in discussions and ask your questions - all during a class</p>
      </div>
    )
  }
  
