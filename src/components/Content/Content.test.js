import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Card } from "../Card/Card";
import { waitFor } from '@testing-library/dom';

const customer = {
    id: 1,
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
    email: 'george.bluth@reqres.in'
}

test('Loading content', async () => {
    render(<Card key={customer.id} data={customer} />)
    await waitFor(() => {
        expect(screen.getByText('George Bluth')).toBeInTheDocument();
        expect(screen.getByText('george.bluth@reqres.in')).toBeInTheDocument();
    })
})