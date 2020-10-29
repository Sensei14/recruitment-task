import React, { useState } from "react";
import { ModalBody, ModalTitle } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import AddCompositionSummary from "./AddCompositionSummary";

const AddComposition = (props) => {
    const dispatch = useDispatch();
    const [showSummary, setShowSummary] = useState(false);

    const validateTitle = (value) => {
        let error;
        if (!value || value.length < 3) {
            error = "* Must be at least 3 characters length";
        }
        return error;
    };

    const validateAlbum = (value) => {
        let error;
        if (!value || value.length < 3) {
            error = "* Must be at least 3 characters length";
        }
        return error;
    };

    const validateDescription = (value) => {
        let error;
        if (!value || value.length < 15) {
            error = "* Must be at least 15 characters length";
        }
        return error;
    };

    const validateDate = (value) => {
        let error;
        if (!value) {
            error = "* Required";
        }
        return error;
    };

    const validateVideo = (value) => {
        let error;
        if (!value) {
            error = "* Required";
        }
        return error;
    };

    const toggleSummary = (values) => {
        console.log(values);
        setShowSummary(!showSummary);
    };

    const handleSubmit = (values) => {
        dispatch({
            type: "ADD_COMPOSITION",
            payload: values,
        });

        props.close();
        toggleSummary();
    };

    return (
        <Modal
            show={props.show}
            onHide={props.close}
            contentClassName='add-composition-modal'
            centered
        >
            <ModalTitle>
                {showSummary ? "Summary" : "Add composition"}{" "}
            </ModalTitle>
            <ModalBody>
                <Formik
                    initialValues={{
                        title: "",
                        album: "",
                        date: "",
                        description: "",
                        video: "",
                    }}
                    onSubmit={toggleSummary}
                >
                    {({ errors, touched, values }) => (
                        <>
                            {!showSummary && (
                                <Form className='add-composition__form'>
                                    <div className='form-group'>
                                        <label>
                                            Title
                                            {errors.title && touched.title && (
                                                <span>{errors.title}</span>
                                            )}
                                        </label>
                                        <Field
                                            name='title'
                                            type='text'
                                            validate={validateTitle}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <label>
                                            Album
                                            {errors.album && touched.album && (
                                                <span>{errors.album}</span>
                                            )}
                                        </label>
                                        <Field
                                            name='album'
                                            validate={validateAlbum}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>
                                            Date
                                            {errors.date && touched.date && (
                                                <span>{errors.date}</span>
                                            )}
                                        </label>
                                        <Field
                                            name='date'
                                            type='date'
                                            validate={validateDate}
                                            placeholder='title'
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <label>
                                            Description
                                            {errors.description &&
                                                touched.description && (
                                                    <span>
                                                        {errors.description}
                                                    </span>
                                                )}
                                        </label>
                                        <Field
                                            name='description'
                                            component='textarea'
                                            rows='5'
                                            validate={validateDescription}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <label>
                                            Video URL
                                            {errors.video && touched.video && (
                                                <span>{errors.video}</span>
                                            )}
                                        </label>
                                        <Field
                                            name='video'
                                            type='text'
                                            validate={validateVideo}
                                        />
                                    </div>
                                    <div className='add-composition__buttons'>
                                        <button
                                            type='button'
                                            className='add-composition__btn add-composition__btn--cancel'
                                            onClick={props.close}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type='submit'
                                            className='add-composition__btn add-composition__btn--confirm'
                                        >
                                            Next
                                        </button>
                                    </div>
                                </Form>
                            )}
                            {showSummary && (
                                <AddCompositionSummary
                                    data={values}
                                    toggleSummary={toggleSummary}
                                    handleSubmit={handleSubmit}
                                />
                            )}
                        </>
                    )}
                </Formik>
            </ModalBody>
        </Modal>
    );
};

export default AddComposition;
