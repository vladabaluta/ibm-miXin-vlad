import React, {Component} from 'react'
import '../src/components/button/buttonComponent.css';
import ButtonComponent from '../src/components/button/buttonComponent'

export default {
    title: 'Button Mixin'
};

const deleteSomething = () => {
    alert('Are you sure you want to delete?')
}

export const button = () => <ButtonComponent methodToRun={deleteSomething} name="Delete"> </ButtonComponent>