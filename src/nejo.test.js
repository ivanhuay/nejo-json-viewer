import React from 'react';
import renderer from 'react-test-renderer';
import Nejo from './nejo';

const basicData = {
    first_name: 'Ivan',
    last_name: 'Huayraña',
    age: 32,
    status: 'Open to work'
}

const nestedData = {
    first_name: 'Ivan',
    last_name: 'Huayraña',
    age: 32,
    status: 'Open to work',
    developer: true,
    job_experience: [
        {
            company: 'R/GA',
            position: 'Tech Lead',
            from: new Date("2019-04-01T09:00"),
            to: new Date("2024-09-30T09:00")
        },
        {
            company: 'Grava.io',
            position: 'Full Stack Developer',
            from: new Date("2024-09-30T09:00"),
            to: new Date("2019-03-30T09:00")
        },
    ]
}

it('renders with basic data', () => {
    const component = renderer.create(
        <Nejo jsonData={basicData} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders with nested data', () => {
    const component = renderer.create(
        <Nejo jsonData={nestedData} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});