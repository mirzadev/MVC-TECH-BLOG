async function registerFormHandler(event){
    event.preventDefault();

    const username = document.querySelector('#username-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();
    const twitter = document.querySelector('#twitter-register').value.trim();
    const github = document.querySelector('#github-register').value.trim();

    if (username && email && password) {
        const response = await fetch(`/api/users`, {
          method: 'POST',
          body: JSON.stringify({
            username,
            email,
            twitter,
            github,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });
    
        // check the response status
        if (response.ok) {
          console.log('success');
          document.location.replace('/dashboard');
        } else {
          alert(response.statusText);
        }
      }
  }

document.querySelector('.register-form').addEventListener('submit', registerFormHandler);