import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
class PostNew extends Component {
    renderTextField(field){
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                className="form-control "
                type="text"
                {...field.input} 
                
                />
            </div>
        );
    }
    render() { 
        return (
                <form>
                    <Field 
                    label="Title"
                    name="title"
                    component={this.renderTextField}                    
                    />

                    <Field 
                    label="Tags"
                    name="tags"
                    component={this.renderTextField}                    
                    />

                    <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderTextField}                    
                    />
                </form>
            );
    }
}
 
export default reduxForm({
    form:'newForm'
})(PostNew);