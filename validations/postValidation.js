import { header, param, body } from 'express-validator';
import { isValidObjectId } from 'mongoose';
import { applyValidations } from '../middleware/apply-validations.js';

export const createPostValidations = [
    body('title').notEmpty().withMessage('El campo { title } no debe estar vacion').isString().withMessage('El campo { title } debe ser un string'),
    body('content').notEmpty().withMessage('El campo { content } no debe estar vacion').isString().withMessage('El campo { content } debe ser un string'),
    applyValidations,
];

export const listPostValidations = [
    header('authorization').exists(),
    applyValidations,
]

export const getPostValidations = [
    param('postId').notEmpty().withMessage('El parametro { postId } no debe estar vacio.').isString().withMessage('El parametro { postId } debe ser un string.').custom(isValidObjectId).withMessage('El parametro { postId } debe ser una id valida.'),
    applyValidations
];

export const updatePostValidations = [
    param('postId').notEmpty().withMessage('El parametro { postId } no debe estar vacio.').isString().withMessage('El parametro { postId } debe ser un string.').custom(isValidObjectId).withMessage('El parametro { postId } debe ser una id valida.'),
    body('title').notEmpty().withMessage('El campo { title } no debe estar vacion').isString().withMessage('El campo { title } debe ser un string'),
    body('content').notEmpty().withMessage('El campo { content } no debe estar vacion').isString().withMessage('El campo { content } debe ser un string'),
    applyValidations,
];

export const deletePostValidations = [
    param('postId').notEmpty().withMessage('El parametro { postId } no debe estar vacio.').isString().withMessage('El parametro { postId } debe ser un string.').custom(isValidObjectId).withMessage('El parametro { postId } debe ser una id valida.'),
    applyValidations,
]