/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaRegEnvelope } from "react-icons/fa";

const Modal = ({ isOpen, setOpen }) => {
	const isActive = isOpen ? "is-active" : "";
	return (
		<div className={`modal ${isActive}`}>
			<div className="modal-background"></div>
			<div className="modal-content">
				<div className="field">
					<label className="label has-text-white">Name</label>
					<div className="control">
						<input
							className="input"
							type="text"
							placeholder="Name"
						/>
					</div>
				</div>

				<div className="field">
					<label className="label has-text-white">Phone Number</label>
					<div className="control">
						<input
							className="input"
							type="tel"
							placeholder="Phone Number"
						/>
					</div>
				</div>
				<div className="field">
					<label className="label has-text-white">Email</label>
					<div className="control has-icons-left has-icons-right">
						<input
							className="input"
							type="email"
							placeholder="Email"
						/>
						<span className="icon is-small is-left">
							<FaRegEnvelope />
						</span>
					</div>
				</div>

				<div className="field">
					<label className="label has-text-white">Time Zone</label>
					<div className="control">
						<div className="select">
							<select>
								<option>Central Standard Time</option>
								<option>Mountain Standard Time</option>
								<option>Pacific Standard Time</option>
								<option>Alaska Standard Time</option>
								<option>Hawaii-Aleutian Standard Time</option>
								<option>Eastern Standard Time</option>
							</select>
						</div>
					</div>
				</div>

				<div className="field">
					<label className="label has-text-white">Pet's Name</label>
					<div className="control">
						<input
							className="input"
							type="text"
							placeholder="Pet's Name"
						/>
					</div>
				</div>

				<div className="field">
					<label className="label has-text-white">Pet Type</label>
					<div className="control">
						<input
							className="input"
							type="text"
							placeholder="Pet Type"
						/>
					</div>
				</div>

				<div className="field">
					<label className="label has-text-white">Age</label>
					<div className="control">
						<input
							className="input"
							type="text"
							placeholder="Age"
						/>
					</div>
				</div>

				<div className="field">
					<label className="label has-text-white">Questions</label>
					<div className="control">
						<textarea
							className="textarea"
							placeholder="Questions and Concerns"></textarea>
					</div>
				</div>

				<div className="field">
					<div className="control">
						<label className="checkbox">
							<input type="checkbox" />
							<span className="has-text-white">
								I agree to the{" "}
							</span>
							<a href="#">terms and conditions</a>
						</label>
					</div>
				</div>

				<div className="field">
					<div className="control">
						<label className="radio">
							<input type="radio" name="question" />
							Yes
						</label>
						<label className="radio">
							<input type="radio" name="question" />
							No
						</label>
					</div>
				</div>

				<div className="field is-grouped">
					<div className="control">
						<button className="button is-link">Submit</button>
					</div>
					<div className="control">
						<button className="button is-link is-light">
							Cancel
						</button>
					</div>
				</div>
			</div>
			<button
				className="modal-close is-large"
				aria-label="close"
				onClick={() => setOpen(false)}></button>
		</div>
	);
};

export default Modal;
