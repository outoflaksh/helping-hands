import React from "react";
import {
  FormWrapper,
  FormContent,
  FormGroup,
  FormHeader,
  SubmitButton,
} from "../components/styles/Form.styled";
import { Page, Flex } from "../components/styles/Utility.styled";

const PostJob = () => {
  return (
    <Page>
      <Flex align="center" justify="center">
        <FormWrapper>
          <FormContent>
            <FormHeader>
              <h1>Post a new job</h1>
            </FormHeader>
            <form>
              <FormGroup>
                <input type="text" placeholder="Job title; Ex: Construction" />
              </FormGroup>
              <FormGroup>
                <input type="text" placeholder="Job location; Ex: ABC School" />
                <input type="text" placeholder="Job address" />
              </FormGroup>
              <FormGroup>
                <input type="text" placeholder="Contact number" />
              </FormGroup>
              <FormGroup>
                <input type="text" placeholder="Dates" />
              </FormGroup>
              <SubmitButton type="submit">Post job</SubmitButton>
            </form>
          </FormContent>
        </FormWrapper>
      </Flex>
    </Page>
  );
};

export default PostJob;
