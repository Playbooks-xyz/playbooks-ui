import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';

import { useSession, useStore, useToast, useTracker } from 'contexts';
import IndexRoute from 'routes/index';

const Router = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const router = useParams;
	const session = useSession();
	const store = useStore();
	const toast = useToast();
	const tracker = useTracker();
	const props = { location, navigate, router, session, store, toast, tracker };

	// Render
	return (
		<Routes>
			<Route path='/' element={<IndexRoute {...props} />} />
		</Routes>
	);
};

export default Router;
