import React from 'react';
import { Tab, Nav, Col, Row, Card } from 'react-bootstrap';

const TaskFooter = () => {

	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<Row>
				<Col sm={3}>
					<Nav variant="pills" className="flex-column">
						<Nav.Item>
							<Nav.Link eventKey="first">Комментарии</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second">Время</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
				<Col sm={9}>
					<Tab.Content>
					<Tab.Pane eventKey="first">
						
						<Card className="bComment mb-2">
							<Card.Body>
								<div className="scard-title h6">Вадим Змиевский <small className="text-muted bCoomentDate">23.02 20:06</small></div>
								<hr />
								<Card.Text>
									+800 руб.
								</Card.Text>
							</Card.Body>
						</Card>
						<Card className="bComment mb-2">
							<Card.Body>
								<div className="scard-title h6">Вадим Змиевский <small className="text-muted bCoomentDate">23.02 20:06</small></div>
								<hr />
								<Card.Text>
									Доработка таблицы - Вадим нужно сделать, если сможешь кого то давай привлечем!!
								</Card.Text>
							</Card.Body>
						</Card>
					</Tab.Pane>
					<Tab.Pane eventKey="second">
						<p>Доработка таблицы - Вадим нужно сделать, если сможешь кого то давай привлечем!!</p>
						<p>Доработка таблицы - Вадим нужно сделать, если сможешь кого то давай привлечем!!</p>
					</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
}

export default TaskFooter;