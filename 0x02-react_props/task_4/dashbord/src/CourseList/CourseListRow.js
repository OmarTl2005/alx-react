import React from 'react'
import PropTypes from "prop-types";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell}) => {
  return (
    <tr>
        { isHeader ? 
        textSecondCell === null ? <th colSpan={2}>{textFirstCell}</th> : 
        <>
          <th>{ textFirstCell }</th>
          <th>{ textSecondCell }</th>
        </>
         : 
         <>
          <th>{ textFirstCell }</th>
          <th>{ textSecondCell }</th>
        </>
        }
    </tr>
  )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;