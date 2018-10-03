from . import main
from flask import Flask, render_template, request, jsonify,url_for
@main.route('/')
def index():
	js_url = url_for('static', filename='js/main.js')
	return render_template('index.html',js_url=js_url)

@main.route('/process', methods=['POST'])
def process():

	email = request.form['email']
	name = request.form['name']

	if name and email:
		newName = name[::-1]

		return jsonify({'name': newName})
	return jsonify({'error':'Missing data!'})	

