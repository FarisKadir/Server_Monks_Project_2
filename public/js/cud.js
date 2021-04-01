//Function that calls the create user endpoint.
const addButtonHandler = async (event) => {
    event.preventDefault();
    const first_name = document.querySelector('#first_name').value.trim();
    const last_name = document.querySelector('#last_name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const role_id = document.querySelector('#role_id').value;
    const password = document.querySelector('#password').value.trim();
  
    if (first_name && last_name && email && role_id && password)    {
        const response = await fetch(`/api/users`, {
            method: 'POST',
            body: JSON.stringify({
              "first_name": first_name,
              "last_name":  last_name,
              "email":  email,
              "password":   password,
              "role_id": role_id
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          
          if (response.ok) {
            document.location.replace('/profile');
          } else {
            alert('Failed to add employee');
          };
    } else{
        alert("All fields except Employee ID # are required");
    }
};
  
  

//Function that retrieves the employee information and calls the delete user endpoint.
const delListButtonHandler = async (event) => {
    const id = event.target.getAttribute('data-id');

    if (id) {
        const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
            alert("Delete Succesful");
        } else {
            alert('Failed to delete user:' + response.statusText);
        };

    };
};

//Function that retrieves the employee information and calls the delete user endpoint.
const delButtonHandler = async (event) => {
    const id = document.querySelector('#employee_id').value;

    if (id)   {
            const response = await fetch(`/api/users/${id}`, {
                method: 'DELETE',
                });
        
                if (response.ok) {
                    document.location.replace('/profile');
                    alert("Delete Succesful");
                } else {
                    alert('Failed to delete user:' + response.statusText);
            };
        } else  {
            alert('You must select an Employee ID #');
        };
};


//Function that retrieves the employee information and calls the update user endpoint.
const updateButtonHandler = async (event) => {
    event.preventDefault();
    const first_name = document.querySelector('#first_name').value.trim();
    const last_name = document.querySelector('#last_name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const role = document.querySelector('#role').value.trim();

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        });

        if (response.ok) {
            document.location.replace('/profile');
            alert("Update Succesful");
        } else {
            alert('Failed to update the user');
        };
    };
};

document.querySelector('#add').addEventListener('click', addButtonHandler);
document.querySelector('#update').addEventListener('click', updateButtonHandler);
document.querySelector('#delete').addEventListener('click', delButtonHandler);
document.querySelector('.delete-list').addEventListener('click', delButtonHandler);