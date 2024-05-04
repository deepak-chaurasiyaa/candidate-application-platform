import React from 'react';

import { Suspense } from 'react';

import Layout from './components/layout/Layout.jsx';

import '../src/assets/css/style.css';

function App() {
	return (
		<div className='pageWrapper'>
			<Suspense fallback={<div className='container'>Loading...</div>}>
				<Layout></Layout>
			</Suspense>
		</div>
	);
}

export default App;
