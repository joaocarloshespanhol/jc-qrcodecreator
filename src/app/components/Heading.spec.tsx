import { render, screen } from '@testing-library/react'
import { Heading } from './Heading'

describe('<Heading />', () => {
    it('should render successfully', () => {
        render(<Heading>test</Heading>)
        expect(screen.getByText('test')).toBeDefined()
    })
})
