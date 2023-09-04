# fullstack_react_project

**Employee Management System**

to run this project please intsall the node modules by hit this command in terminal

`npm install`

Here is the some of the functionality where user can do that 

-> View list of employees within the organization. 

<img width="1470" alt="list" src="https://github.com/DhruvPatel2105/fullstack_react_project/assets/58779025/82169886-d574-4779-91fe-32439ab9ce34">

-> List can be filtered using parameters like job type.

<img width="1470" alt="filter job type" src="https://github.com/DhruvPatel2105/fullstack_react_project/assets/58779025/539e4967-fd34-44fd-8378-4b10818f8e72">

-> Create new Employee with some default parameters or list of actual parameters.

<img width="1470" alt="add new" src="https://github.com/DhruvPatel2105/fullstack_react_project/assets/58779025/621d7d86-f899-41de-bade-c43b130fc3ea">

-> Update/Edit Employee data, only a few specific data should be edited/updated.

<img width="1470" alt="edit" src="https://github.com/DhruvPatel2105/fullstack_react_project/assets/58779025/f3d15281-4675-4c87-83ff-2249b3657cc0">

-> Delete Employee data.


• For this project for the backEnd I use the **ApolloServer** and for database means for NoSQL database I used the **GraphQL**.

• With the help of routing we can handle the multiple pages also I added the add Employee link in the Navbar so with the help of routing we can open the Employee Create Page.

inside the query Mutation we have differenct methods like postEmployee,deleteEmployee and updateEmployee.

• We have Employee Details API: Fetch all the data about single Employee ie similar to SQL => Select * from Tbl where ID=”MongoDB_ID”

• Create Employee Update API: Using this API update only selected fields of Employee record.
Only allow to modify Title, Department and CurrentStatus.

• Delete Employee API: Using this api user can delete any selected Employee data but make sure if employee’s CurrentStatus is true you need to display message: “CAN’T DELETE EMPLOYEE –
STATUS ACTIVE”

• In the Navbar I have one more tab called "Retire Soon", this function will display all the employee whose retirement is coming in next six month.for more details please see the /client/src/customComponent/**retirement.js**.And notonly this when you click on the view button for the any employee then it will display the how much time left for the retirement.


<img width="766" alt="Retirement Time Left" src="https://github.com/DhruvPatel2105/fullstack_react_project/assets/58779025/c44c2db5-081c-4b0f-8854-552cfc2cc674">






