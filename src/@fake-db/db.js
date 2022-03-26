import mock from "@/@fake-db/mock";

import './data/controllers';
import './data/indicators';

mock.onAny().passThrough()