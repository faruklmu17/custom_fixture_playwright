
import { sign } from "crypto";
import {test,expect} from "./fixtures"


test('login page loads correctly', async ({ signedUpPage }) => {
  
await signedUpPage.waitForTimeout(5000)
await expect(signedUpPage).toHaveTitle("Login - Automation Practice")


});
