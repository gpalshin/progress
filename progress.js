/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.Put = (function() {
    
        /**
         * Properties of a Put.
         * @exports IPut
         * @interface IPut
         * @property {number|Long|null} [id] Put id
         * @property {number|null} [semestr] Put semestr
         * @property {number|null} [year] Put year
         * @property {number|null} [control_type_id] Put control_type_id
         * @property {number|Long|null} [subject_id] Put subject_id
         * @property {number|null} [date] Put date
         * @property {number|null} [profile_id] Put profile_id
         * @property {number|null} [profile_uid] Put profile_uid
         * @property {number|Long|null} [mark_id] Put mark_id
         * @property {number|null} [mark_nmb_retake] Put mark_nmb_retake
         * @property {number|null} [mark_date] Put mark_date
         * @property {number|null} [mark_value] Put mark_value
         */
    
        /**
         * Constructs a new Put.
         * @exports Put
         * @classdesc Represents a Put.
         * @implements IPut
         * @constructor
         * @param {IPut=} [properties] Properties to set
         */
        function Put(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Put id.
         * @member {number|Long} id
         * @memberof Put
         * @instance
         */
        Put.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Put semestr.
         * @member {number} semestr
         * @memberof Put
         * @instance
         */
        Put.prototype.semestr = 0;
    
        /**
         * Put year.
         * @member {number} year
         * @memberof Put
         * @instance
         */
        Put.prototype.year = 0;
    
        /**
         * Put control_type_id.
         * @member {number} control_type_id
         * @memberof Put
         * @instance
         */
        Put.prototype.control_type_id = 0;
    
        /**
         * Put subject_id.
         * @member {number|Long} subject_id
         * @memberof Put
         * @instance
         */
        Put.prototype.subject_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Put date.
         * @member {number} date
         * @memberof Put
         * @instance
         */
        Put.prototype.date = 0;
    
        /**
         * Put profile_id.
         * @member {number} profile_id
         * @memberof Put
         * @instance
         */
        Put.prototype.profile_id = 0;
    
        /**
         * Put profile_uid.
         * @member {number} profile_uid
         * @memberof Put
         * @instance
         */
        Put.prototype.profile_uid = 0;
    
        /**
         * Put mark_id.
         * @member {number|Long} mark_id
         * @memberof Put
         * @instance
         */
        Put.prototype.mark_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Put mark_nmb_retake.
         * @member {number} mark_nmb_retake
         * @memberof Put
         * @instance
         */
        Put.prototype.mark_nmb_retake = 0;
    
        /**
         * Put mark_date.
         * @member {number} mark_date
         * @memberof Put
         * @instance
         */
        Put.prototype.mark_date = 0;
    
        /**
         * Put mark_value.
         * @member {number} mark_value
         * @memberof Put
         * @instance
         */
        Put.prototype.mark_value = 0;
    
        /**
         * Creates a new Put instance using the specified properties.
         * @function create
         * @memberof Put
         * @static
         * @param {IPut=} [properties] Properties to set
         * @returns {Put} Put instance
         */
        Put.create = function create(properties) {
            return new Put(properties);
        };
    
        /**
         * Encodes the specified Put message. Does not implicitly {@link Put.verify|verify} messages.
         * @function encode
         * @memberof Put
         * @static
         * @param {IPut} message Put message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Put.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            if (message.semestr != null && message.hasOwnProperty("semestr"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.semestr);
            if (message.year != null && message.hasOwnProperty("year"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.year);
            if (message.control_type_id != null && message.hasOwnProperty("control_type_id"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.control_type_id);
            if (message.subject_id != null && message.hasOwnProperty("subject_id"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.subject_id);
            if (message.date != null && message.hasOwnProperty("date"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.date);
            if (message.profile_id != null && message.hasOwnProperty("profile_id"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.profile_id);
            if (message.profile_uid != null && message.hasOwnProperty("profile_uid"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.profile_uid);
            if (message.mark_id != null && message.hasOwnProperty("mark_id"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.mark_id);
            if (message.mark_nmb_retake != null && message.hasOwnProperty("mark_nmb_retake"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.mark_nmb_retake);
            if (message.mark_date != null && message.hasOwnProperty("mark_date"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.mark_date);
            if (message.mark_value != null && message.hasOwnProperty("mark_value"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.mark_value);
            return writer;
        };
    
        /**
         * Encodes the specified Put message, length delimited. Does not implicitly {@link Put.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Put
         * @static
         * @param {IPut} message Put message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Put.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Put message from the specified reader or buffer.
         * @function decode
         * @memberof Put
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Put} Put
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Put.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Put();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.semestr = reader.uint32();
                    break;
                case 3:
                    message.year = reader.uint32();
                    break;
                case 4:
                    message.control_type_id = reader.uint32();
                    break;
                case 6:
                    message.subject_id = reader.uint64();
                    break;
                case 8:
                    message.date = reader.uint32();
                    break;
                case 9:
                    message.profile_id = reader.uint32();
                    break;
                case 10:
                    message.profile_uid = reader.uint32();
                    break;
                case 11:
                    message.mark_id = reader.uint64();
                    break;
                case 12:
                    message.mark_nmb_retake = reader.uint32();
                    break;
                case 13:
                    message.mark_date = reader.uint32();
                    break;
                case 14:
                    message.mark_value = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Put message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Put
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Put} Put
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Put.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Put message.
         * @function verify
         * @memberof Put
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Put.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.semestr != null && message.hasOwnProperty("semestr"))
                if (!$util.isInteger(message.semestr))
                    return "semestr: integer expected";
            if (message.year != null && message.hasOwnProperty("year"))
                if (!$util.isInteger(message.year))
                    return "year: integer expected";
            if (message.control_type_id != null && message.hasOwnProperty("control_type_id"))
                if (!$util.isInteger(message.control_type_id))
                    return "control_type_id: integer expected";
            if (message.subject_id != null && message.hasOwnProperty("subject_id"))
                if (!$util.isInteger(message.subject_id) && !(message.subject_id && $util.isInteger(message.subject_id.low) && $util.isInteger(message.subject_id.high)))
                    return "subject_id: integer|Long expected";
            if (message.date != null && message.hasOwnProperty("date"))
                if (!$util.isInteger(message.date))
                    return "date: integer expected";
            if (message.profile_id != null && message.hasOwnProperty("profile_id"))
                if (!$util.isInteger(message.profile_id))
                    return "profile_id: integer expected";
            if (message.profile_uid != null && message.hasOwnProperty("profile_uid"))
                if (!$util.isInteger(message.profile_uid))
                    return "profile_uid: integer expected";
            if (message.mark_id != null && message.hasOwnProperty("mark_id"))
                if (!$util.isInteger(message.mark_id) && !(message.mark_id && $util.isInteger(message.mark_id.low) && $util.isInteger(message.mark_id.high)))
                    return "mark_id: integer|Long expected";
            if (message.mark_nmb_retake != null && message.hasOwnProperty("mark_nmb_retake"))
                if (!$util.isInteger(message.mark_nmb_retake))
                    return "mark_nmb_retake: integer expected";
            if (message.mark_date != null && message.hasOwnProperty("mark_date"))
                if (!$util.isInteger(message.mark_date))
                    return "mark_date: integer expected";
            if (message.mark_value != null && message.hasOwnProperty("mark_value"))
                if (!$util.isInteger(message.mark_value))
                    return "mark_value: integer expected";
            return null;
        };
    
        /**
         * Creates a Put message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Put
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Put} Put
         */
        Put.fromObject = function fromObject(object) {
            if (object instanceof $root.Put)
                return object;
            var message = new $root.Put();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.semestr != null)
                message.semestr = object.semestr >>> 0;
            if (object.year != null)
                message.year = object.year >>> 0;
            if (object.control_type_id != null)
                message.control_type_id = object.control_type_id >>> 0;
            if (object.subject_id != null)
                if ($util.Long)
                    (message.subject_id = $util.Long.fromValue(object.subject_id)).unsigned = true;
                else if (typeof object.subject_id === "string")
                    message.subject_id = parseInt(object.subject_id, 10);
                else if (typeof object.subject_id === "number")
                    message.subject_id = object.subject_id;
                else if (typeof object.subject_id === "object")
                    message.subject_id = new $util.LongBits(object.subject_id.low >>> 0, object.subject_id.high >>> 0).toNumber(true);
            if (object.date != null)
                message.date = object.date >>> 0;
            if (object.profile_id != null)
                message.profile_id = object.profile_id >>> 0;
            if (object.profile_uid != null)
                message.profile_uid = object.profile_uid >>> 0;
            if (object.mark_id != null)
                if ($util.Long)
                    (message.mark_id = $util.Long.fromValue(object.mark_id)).unsigned = true;
                else if (typeof object.mark_id === "string")
                    message.mark_id = parseInt(object.mark_id, 10);
                else if (typeof object.mark_id === "number")
                    message.mark_id = object.mark_id;
                else if (typeof object.mark_id === "object")
                    message.mark_id = new $util.LongBits(object.mark_id.low >>> 0, object.mark_id.high >>> 0).toNumber(true);
            if (object.mark_nmb_retake != null)
                message.mark_nmb_retake = object.mark_nmb_retake >>> 0;
            if (object.mark_date != null)
                message.mark_date = object.mark_date >>> 0;
            if (object.mark_value != null)
                message.mark_value = object.mark_value >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a Put message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Put
         * @static
         * @param {Put} message Put
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Put.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.semestr = 0;
                object.year = 0;
                object.control_type_id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.subject_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.subject_id = options.longs === String ? "0" : 0;
                object.date = 0;
                object.profile_id = 0;
                object.profile_uid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.mark_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.mark_id = options.longs === String ? "0" : 0;
                object.mark_nmb_retake = 0;
                object.mark_date = 0;
                object.mark_value = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.semestr != null && message.hasOwnProperty("semestr"))
                object.semestr = message.semestr;
            if (message.year != null && message.hasOwnProperty("year"))
                object.year = message.year;
            if (message.control_type_id != null && message.hasOwnProperty("control_type_id"))
                object.control_type_id = message.control_type_id;
            if (message.subject_id != null && message.hasOwnProperty("subject_id"))
                if (typeof message.subject_id === "number")
                    object.subject_id = options.longs === String ? String(message.subject_id) : message.subject_id;
                else
                    object.subject_id = options.longs === String ? $util.Long.prototype.toString.call(message.subject_id) : options.longs === Number ? new $util.LongBits(message.subject_id.low >>> 0, message.subject_id.high >>> 0).toNumber(true) : message.subject_id;
            if (message.date != null && message.hasOwnProperty("date"))
                object.date = message.date;
            if (message.profile_id != null && message.hasOwnProperty("profile_id"))
                object.profile_id = message.profile_id;
            if (message.profile_uid != null && message.hasOwnProperty("profile_uid"))
                object.profile_uid = message.profile_uid;
            if (message.mark_id != null && message.hasOwnProperty("mark_id"))
                if (typeof message.mark_id === "number")
                    object.mark_id = options.longs === String ? String(message.mark_id) : message.mark_id;
                else
                    object.mark_id = options.longs === String ? $util.Long.prototype.toString.call(message.mark_id) : options.longs === Number ? new $util.LongBits(message.mark_id.low >>> 0, message.mark_id.high >>> 0).toNumber(true) : message.mark_id;
            if (message.mark_nmb_retake != null && message.hasOwnProperty("mark_nmb_retake"))
                object.mark_nmb_retake = message.mark_nmb_retake;
            if (message.mark_date != null && message.hasOwnProperty("mark_date"))
                object.mark_date = message.mark_date;
            if (message.mark_value != null && message.hasOwnProperty("mark_value"))
                object.mark_value = message.mark_value;
            return object;
        };
    
        /**
         * Converts this Put to JSON.
         * @function toJSON
         * @memberof Put
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Put.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Put;
    })();

    return $root;
});
