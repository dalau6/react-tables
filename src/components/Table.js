import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Table extends Component {
	constructor() {
        super()
		this.people = [
			{
				name: "John Sina",
				birth: "11/30/2011"
			}, {
				name: "Barcy Washington",
				birth: "09/16/1992"
			}, {
				name: "Peter Parker",
				birth: "01/16/1992"
			}, {
				name: "Jimmy Shergil",
				birth: "12/12/2001"
			}, {
				name: "Alexander Alfred",
				birth: "02/09/1891"
			}, {
				name: "Krishna Gupta",
				birth: "12/01/1982"
			}, {
				name: "Sania Mirza",
				birth: "11/30/2011"
			}, {
				name: "Lata Pathak",
				birth: "10/31/1999"
			}
		];
	}
	compareDates(person1, person2) {
		// complete this date comparator which enables sort by age
		const date1 = +Date.parse(person1.birth);
		const date2 = +Date.parse(person2.birth);
		if (date1 > date2) {
			return 1
		} else if (date1 < date2) {
			return -1
		} else {
			return 0
		}
	}

	compareNames(person1, person2) {
		// complete this string comparator with enables sort by name
		const name1 = person1.name;
		const name2 = person2.name;
		if (name1 > name2) {
			return 1
		} else if (name1 < name2) {
			return -1
		} else {
			return 0
		}
	}

	render() {
		const {sortParameter} = this.props;
		const list = sortParameter === 'name' ? this.people.sort(this.compareNames) : this.people.sort(this.compareDates);
		return (
  <div className='table-div'>
    <table className='table table-striped table-bordered table-hover full-width'>
      <thead>
        <tr>
          <th className='course-name'>Person Name</th>
          <th className='duration'>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
				{list.map((person) => (
					<tr key={person.name}>
						<td>{person.name}</td>
						<td>{person.birth}</td>
					</tr>))
				}
      </tbody>
    </table>
  </div>
);

	}
}

// Uncomment the snippet below
 Table.propTypes = {
 	sortParameter: PropTypes.string
 }

export default Table;
