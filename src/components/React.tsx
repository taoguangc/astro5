import { useState } from 'react'

const React = () => {
  const [name] = useState('John')
  const [isVisible] = useState(true)

  return (
    <section>
      <div className='container mx-auto'>
        <h1>Hello, world!</h1>
        <p>Welcome to my React app.</p>
        <p>Here are some examples of how to use React:</p>
        <ul>
          <li>
            <strong>Variables:</strong> Use the <code>{'{}'}</code> syntax to display variables. For example:
            <p>Hello, {name}!</p>
          </li>
          <li>
            <strong>Conditionals:</strong> Use the <code>&&</code> operator or ternary expression to conditionally
            render elements. For example:
            {isVisible && <p>This text is visible!</p>}
          </li>
        </ul>
      </div>
    </section>
  )
}

export default React
