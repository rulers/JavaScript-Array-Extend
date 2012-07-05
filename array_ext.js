if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(obj, fromIndex) {
		if (undefined===fromIndex) {
			fromIndex = 0;
		} else if (fromIndex < 0) {
			fromIndex = Math.max(0, this.length + fromIndex);
		}
		for (var i = fromIndex; i < this.length; i++) {
			if (this[i] === obj)
				return i;
		}
		return -1;
	};
}

if (!Array.indexOf)
    Array.indexOf= function(array, obj, fromIndex) {
        return Array.prototype.indexOf.call(array, obj, fromIndex);
    }


if (!Array.prototype.lastIndexOf) {
	Array.prototype.lastIndexOf = function(obj, fromIndex) {
		if (undefined===fromIndex) {
			fromIndex = this.length - 1;
		} else if (fromIndex < 0) {
			fromIndex = Math.max(0, this.length + fromIndex);
		}
		for (var i = fromIndex; i >= 0; i--) {
			if (this[i] === obj)
				return i;
		}
		return -1;
	};
}

if (!Array.lastIndexOf)
    Array.lastIndexOf= function(array, obj, fromIndex) {
        return Array.prototype.lastIndexOf.call(array, obj, fromIndex);
    }

if (!Array.prototype.forEach) {
	Array.prototype.forEach = function(f, obj) {
		var l = this.length;
		for (var i = 0; i < l; i++) {
			f.call(obj, this[i], i, this);
		}
	};
}

if (!Array.forEach)
    Array.forEach = function(array, f, obj) {
        return Array.prototype.forEach.call(array, f, obj);
    }

if (!Array.prototype.filter) {
	Array.prototype.filter = function(f, obj) {
		var l = this.length;
		var res = [];
		for (var i = 0; i < l; i++) {
			if (f.call(obj, this[i], i, this)) {
				res.push(this[i]);
			}
		}
		return res;
	};
}

if (!Array.filter)
    Array.filter= function(array, f, obj) {
        return Array.prototype.filter.call(array, f, obj);
    }

if (!Array.prototype.map) {
	Array.prototype.map = function(f, obj) {
		var l = this.length;
		var res = [];
		for (var i = 0; i < l; i++) {
			res.push(f.call(obj, this[i], i, this));
		}
		return res;
	};
}

if (!Array.map)
    Array.map= function(array, f, obj) {
        return Array.prototype.map.call(array, f, obj);
    }

if (!Array.prototype.some) {
	Array.prototype.some = function(f, obj) {
		var l = this.length;
		for (var i = 0; i < l; i++) {
			if (f.call(obj, this[i], i, this)) {
				return true;
			}
		}
		return false;
	};
}
if (!Array.some)
    Array.some= function(array, f, obj) {
        return Array.prototype.some.call(array, f, obj);
    }

if (!Array.prototype.every) {
	Array.prototype.every = function(f, obj) {
		var l = this.length;
		for (var i = 0; i < l; i++) {
			if (!f.call(obj, this[i], i, this)) {
				return false;
			}
		}
		return true;
	};
}
if (!Array.every)
    Array.every = function(array, f, obj) {
        return Array.prototype.every.call(array, f, obj);
    }
    

Array.prototype.contains = function (obj) {
	return this.indexOf(obj) != -1;
};

Array.prototype.clone = function (obj) {
	return this.concat();
};

Array.prototype.insertAt = function (obj, i) {
	this.splice(i, 0, obj);
};

Array.prototype.insertBefore = function (obj, obj2) {
	var i = this.indexOf(obj2);
	if (i == -1)
		this.push(obj);
	else
		this.splice(i, 0, obj);
};

Array.prototype.removeAt = function (i) {
	this.splice(i, 1);
};

Array.prototype.remove = function (obj) {
	var i = this.indexOf(obj);
	if (i != -1)
		this.splice(i, 1);
};
