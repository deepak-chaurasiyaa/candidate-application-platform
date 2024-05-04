import React from 'react';

import { Suspense } from 'react';

import Layout from './components/layout/Layout.jsx';

import { Routing } from './routes/Routing.jsx';

import '../src/assets/css/style.css';

function App() {
	return (
		<div className='pageWrapper'>
			<Suspense>
				<Layout>
					<Routing />
				</Layout>
			</Suspense>
		</div>
	);
}

export default App;
