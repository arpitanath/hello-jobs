import React from "react";
import history from "../../utils/history";
import Search from "./Search";

function JobList() {
  return (
    <>
    <div class="search">
    <Search/>
    </div>
    <table id="customers">
  <tr>
    <th>Job ID</th>
    <th>Position</th>
    <th>Company</th>
    <th>Salary/hour</th>
    <th>Options</th>
  </tr>
  <tr>
    <td>124543</td>
    <td>Senior Software Engineer</td>
    <td>IBM</td>
    <td>3000</td>
    <td>
        <button>Apply</button>
        </td>
  </tr>
  <tr>
    <td>124543</td>
    <td>Senior Software Engineer</td>
    <td>IBM</td>
    <td>3000</td>
    <td>
        <button>Apply</button>
        </td>
  </tr>
  <tr>
    <td>124543</td>
    <td>Senior Software Engineer</td>
    <td>IBM</td>
    <td>3000</td>
    <td>
        <button>Apply</button>
        </td>
  </tr>
  <tr>
    <td>124543</td>
    <td>Senior Software Engineer</td>
    <td>IBM</td>
    <td>3000</td>
    <td>
        <button>Apply</button>
        </td>
  </tr>
  <tr>
    <td>124543</td>
    <td>Senior Software Engineer</td>
    <td>IBM</td>
    <td>3000</td>
    <td>
        <button>Apply</button>
        </td>
  </tr>
  <tr>
    <td>124543</td>
    <td>Senior Software Engineer</td>
    <td>IBM</td>
    <td>3000</td>
    <td>
        <button>Apply</button>
        </td>
  </tr>
  <tr>
    <td>124543</td>
    <td>Senior Software Engineer</td>
    <td>IBM</td>
    <td>3000</td>
    <td>
        <button>Apply</button>
        </td>
  </tr>
</table>
      <button
        class="btn btn-info"
        type="button"
        onClick={() => {
          history.push("/freelancer");
        }}
      >
       Go Back
      </button>
    </>
  );
}

export default JobList;