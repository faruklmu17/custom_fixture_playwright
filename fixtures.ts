import {test as base,expect,Page} from "@playwright/test"

type MyFixtures = {

    signedUpPage: Page
}


const test = base.extend <MyFixtures> ({

    signedUpPage: async ({page}, use) =>{

        await page.goto("https://faruk-hasan.com/automation/signup.html")

       const username = page.locator('#username');
       const email = page.locator('#email');
       const password = page.locator('#password');
       const confirmPassword = page.locator('#confirmPassword');
       const signupButton = page.getByRole('button', { name: 'Sign Up' });
    
       await username.fill('myUser');
       await email.fill('test@example.com');
       await password.fill('Password123!');
       await confirmPassword.fill('Password123!');
       await signupButton.click();

       await use(page)





    }
})

export {test,expect}
