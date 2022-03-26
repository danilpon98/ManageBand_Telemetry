import mock from "@/@fake-db/mock";

import './data/controllers';

mock.onAny().passThrough()