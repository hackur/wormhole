define(["now", "uuid", "debounce", "cors", "emitter", "store", "worker", "hole"], function (now, uuid, debounce, cors, Emitter, store, Worker, Hole) {
	var singletonHole = function () {
		/* istanbul ignore else */
		if (!singletonHole.instance) {
			singletonHole.instance = new Hole();
		}

		return singletonHole.instance;
	};


	// Export
	singletonHole.now = now;
	singletonHole.uuid = uuid;
	singletonHole.debounce = debounce;
	singletonHole.cors = cors;
	singletonHole.store = store;
	singletonHole.Emitter = Emitter;
	singletonHole.Hole = Hole;
	singletonHole.Worker = Worker;


	/* istanbul ignore next */
	if (typeof define === 'function' && define.amd) {
		define(function () { return singletonHole; });
	}
	else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = singletonHole;
	}
	else {
		window.wormhole = singletonHole;
	}
});