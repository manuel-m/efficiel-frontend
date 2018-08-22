import navbar from '../../../js/navbar';
import router from '../../../js/router';

navbar.init({ breakpoint_px: 700 });
router.init(navbar.forceShrink);
